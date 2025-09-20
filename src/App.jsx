import { useState, useEffect } from 'react'
import axios from 'axios'
import UserList from './components/UserList'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
      } catch (err) {
        setError('Failed to load users. Try again later.')
        console.error('Error fetching users:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  // Filter users based on search query
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          User Explorer App
        </h1>
        
        {/* Search Input */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search users by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md mx-auto block px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Conditional Rendering */}
        {loading && (
          <div className="text-center text-xl text-gray-600">
            Loading users...
          </div>
        )}

        {error && (
          <div className="text-center text-xl text-red-600 bg-red-100 p-4 rounded-lg">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            {filteredUsers.length === 0 ? (
              <div className="text-center text-xl text-gray-600">
                No users match your search.
              </div>
            ) : (
              <UserList users={filteredUsers} />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App