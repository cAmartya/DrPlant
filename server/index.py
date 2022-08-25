from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf

# will be using tflite-runtime...
# %pip install tflite-runtime
# import tflite_runtime.interpreter as tflite

app = FastAPI()

model_dir = "saved_models"

origins = [
    "http://localhost",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def ping():
    return "Server is Live and Running"

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image

@app.post("/api/potato")
async def predict(file: UploadFile = File(...)):    

    CLASS_NAMES = ["Early Blight", "Late Blight", "Healthy"]

    image = read_file_as_image(await file.read())
    test_image = np.expand_dims(image, 0).astype(np.float32)

    interpreter = tf.lite.Interpreter(model_path=f"{model_dir}/lite/potato_2.tflite")
    # interpreter = tflite.Interpreter(model_path=f"{model_dir}/lite/potato_2.tflite")
    interpreter.allocate_tensors()
    input_index = interpreter.get_input_details()[0]["index"]
    output_index = interpreter.get_output_details()[0]["index"]

    interpreter.set_tensor(input_index, test_image)
    interpreter.invoke()
    output = interpreter.tensor(output_index)
    
    predicted_class = CLASS_NAMES[np.argmax(output()[0])]
    confidence = np.max(output()[0])

    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }

@app.post("/api/tomato")
async def predict(file: UploadFile = File(...)):

    CLASS_NAMES = ["Early Blight", "Late Blight", "Septoria leaf spot", "Target Spot", "Healthy"]

    image = read_file_as_image(await file.read())
    test_image = np.expand_dims(image, 0).astype(np.float32)

    interpreter = tf.lite.Interpreter(model_path=f"{model_dir}/lite/tomato_2.tflite")
    # interpreter = tflite.Interpreter(model_path=f"{model_dir}/lite/tomato_2.tflite")
    interpreter.allocate_tensors()
    input_index = interpreter.get_input_details()[0]["index"]
    output_index = interpreter.get_output_details()[0]["index"]

    interpreter.set_tensor(input_index, test_image)
    interpreter.invoke()
    output = interpreter.tensor(output_index)
    
    predicted_class = CLASS_NAMES[np.argmax(output()[0])]
    confidence = np.max(output()[0])
    
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }

@app.post("/api/pepper")
async def predict(file: UploadFile = File(...)):

    CLASS_NAMES = ['BacterialSpot', 'Healthy']

    image = read_file_as_image(await file.read())
    test_image = np.expand_dims(image, 0).astype(np.float32)

    interpreter = tf.lite.Interpreter(model_path=f"{model_dir}/lite/pepper_2.tflite")
    # interpreter = tflite.Interpreter(model_path=f"{model_dir}/lite/pepper_2.tflite")
    interpreter.allocate_tensors()
    input_index = interpreter.get_input_details()[0]["index"]
    output_index = interpreter.get_output_details()[0]["index"]

    interpreter.set_tensor(input_index, test_image)
    interpreter.invoke()
    output = interpreter.tensor(output_index)
    
    predicted_class = CLASS_NAMES[np.argmax(output()[0])]
    confidence = np.max(output()[0])
    
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)


