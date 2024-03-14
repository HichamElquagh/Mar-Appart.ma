
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
        const { id } = req.params
        try {
            const user = await User.findById(id)
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
        const { id } = req.params
        const { email, password, name, role } = req.body
        // const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        try {
            const user = await User.findById(id)
            if (!user) {
                return res.status(404).json({ error: 'User not found' })
            }
            const hashedPassword = await bcrypt.hash(password, 10)
            user.email = email
            user.password = hashedPassword
            user.name = name
            user.role = role
            await user.save()
            res.status(200).json({ message: 'User updated successfully', user })
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
