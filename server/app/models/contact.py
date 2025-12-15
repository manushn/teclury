from pydantic import BaseModel,EmailStr

class contactModel(BaseMOdel):
    name:str
    email:EmailStr
    phone:str
    message:str