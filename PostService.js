import Post from "./Post.js";
import FileService from "./FileService.js";

class PostService {

    async create(data, picture) {
        const fileName = FileService.saveFile(picture);
        const post = await Post.create({...data, picture: fileName});
        return post;
    }


    async getAll() {
            const posts = await Post.find();
            return posts;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('id не был указан');
        }
        const post = await Post.findById(id);
        return post;
    }

    async update(data) {
            if (!data._id) {
                throw new Error('id не был указан');
            }
            const updatedPost = await Post.findByIdAndUpdate(data._id, data, {new: true});
            return updatedPost;
    }

    async delete(id) {
            if (!id) {
                throw new Error('id не был указан');
            }
            const post = await Post.findByIdAndDelete(id);
            return post;
    }

}

export default new PostService();