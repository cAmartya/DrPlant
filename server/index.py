from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf

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
    
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)

    MODEL = tf.keras.models.load_model(f"{model_dir}/potato_2")

    CLASS_NAMES = ["Early Blight", "Late Blight", "Healthy"]

    
    predictions = MODEL.predict(img_batch)
    
    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }

@app.post("/api/tomato")
async def predict(file: UploadFile = File(...)):

    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)

    MODEL = tf.keras.models.load_model(f"{model_dir}/tomato_2")

    CLASS_NAMES = ["Early Blight", "Late Blight", "Septoria leaf spot", "Target Spot", "Healthy"]

    
    predictions = MODEL.predict(img_batch)
    print(predictions[0])


    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return {
        'class': predicted_class,
        'confidence': float(confidence),
        'classIndex': float(np.argmax(predictions[0]))
    }

@app.post("/api/pepper")
async def predict(file: UploadFile = File(...)):

    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)

    MODEL = tf.keras.models.load_model(f"{model_dir}/pepper_2")

    CLASS_NAMES = ['BacterialSpot', 'Healthy']

    
    predictions = MODEL.predict(img_batch)

    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)


