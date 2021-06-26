import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"

interface ITagRequest{
  name: string;
}

class CreateTagService{
  async execute(name: string){

    const tagRepositories = getCustomRepository(TagsRepositories)

    if(!name){
      throw new Error("Invalid name")
    }

    const tagAlreadyExists = await tagRepositories.findOne({name})

    if(tagAlreadyExists){
      throw new Error("This tag already exists")
    }

    const tag = tagRepositories.create({name});
    await tagRepositories.save(tag)

    return tag;
  }
}

export { CreateTagService }