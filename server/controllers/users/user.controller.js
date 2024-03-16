
const User = require('../../models/user')

class UserController {

    async getUsers(req, res) {
        try {
            console.log('getUsers');
            const users = await User.find()
            res.status(200).json(users)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: error.message })
        }
    }

    async getUser(req, res) {
        const  id  = req.user.id
        try {
            const getuser = await User.findById(id)
            const user = {
                image: getuser.image,
                username: getuser.username,
                email: getuser.email,
                phone: getuser.phone,
            }
            if (!user) {
                return res.status(404).json({ error: 'User not found' })
            }
            res.status(200).json(user)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: error.message })
        }
    }

   

    async updateUser(req, res) {
        const  id  = req.user.id
        const { image , email, password, name, role } = req.body
        
        try {
            const updateUser = {
                image,
                email,
                password,
                name,
                role
            }
            const updatedUser = await User.findByIdAndUpdate(id, updateUser , { new: true })
            
            res.status(200).json({ message: 'User updated successfully', updatedUser })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: error.message })
        }
    }

    async deleteUser(req, res) {
        const { id } = req.params
        try {
            const user = await User.findByIdAndDelete(id)
            if (!user) {
                return res.status(404).json({ error: 'User not found' })
            }
            res.status(200).json({ message: 'User deleted successfully' })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: error.message })
        }
    }

}

module.exports = new UserController()
