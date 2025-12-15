from pydantic import BaseModel,EmailStr

class StartProjectModel(BaseModel):
    full_name:str
    company:str|None=None
    email:EmailStr
    phone:str
    project_description:str
    budget:str
    project_type:str