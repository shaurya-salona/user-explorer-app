import { useState, useEffect } from 'react'
import UserList from './components/UserList'

// Indian user data
const indianUsers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh.kumar@gmail.com",
    phone: "+91-98765-43210",
    website: "rajeshkumar.in",
    company: {
      name: "Tata Consultancy Services",
      catchPhrase: "Building tomorrow's digital solutions",
      bs: "IT services and consulting"
    },
    address: {
      street: "MG Road",
      suite: "Apt 101",
      city: "Mumbai",
      zipcode: "400001",
      state: "Maharashtra"
    }
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@yahoo.com",
    phone: "+91-87654-32109",
    website: "priyasharma.co.in",
    company: {
      name: "Infosys Limited",
      catchPhrase: "Powered by intellect, driven by values",
      bs: "Digital transformation services"
    },
    address: {
      street: "Brigade Road",
      suite: "Flat 205",
      city: "Bangalore",
      zipcode: "560001",
      state: "Karnataka"
    }
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit.patel@outlook.com",
    phone: "+91-76543-21098",
    website: "amitpatel.com",
    company: {
      name: "Wipro Technologies",
      catchPhrase: "Think, Act, Transform",
      bs: "Technology and business solutions"
    },
    address: {
      street: "Park Street",
      suite: "House 15",
      city: "Kolkata",
      zipcode: "700016",
      state: "West Bengal"
    }
  },
  {
    id: 4,
    name: "Sneha Reddy",
    email: "sneha.reddy@hotmail.com",
    phone: "+91-65432-10987",
    website: "snehareddy.in",
    company: {
      name: "HCL Technologies",
      catchPhrase: "Ideapreneurship in action",
      bs: "IT and business services"
    },
    address: {
      street: "Banjara Hills",
      suite: "Villa 8",
      city: "Hyderabad",
      zipcode: "500034",
      state: "Telangana"
    }
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram.singh@gmail.com",
    phone: "+91-54321-09876",
    website: "vikramsingh.co.in",
    company: {
      name: "Tech Mahindra",
      catchPhrase: "Connected world, connected experiences",
      bs: "Digital transformation and consulting"
    },
    address: {
      street: "Connaught Place",
      suite: "Office 42",
      city: "New Delhi",
      zipcode: "110001",
      state: "Delhi"
    }
  },
  {
    id: 6,
    name: "Ananya Iyer",
    email: "ananya.iyer@yahoo.com",
    phone: "+91-43210-98765",
    website: "ananyaiyer.com",
    company: {
      name: "Cognizant",
      catchPhrase: "Engineering modern business",
      bs: "Digital business solutions"
    },
    address: {
      street: "Anna Salai",
      suite: "Apartment 12",
      city: "Chennai",
      zipcode: "600002",
      state: "Tamil Nadu"
    }
  },
  {
    id: 7,
    name: "Rohit Gupta",
    email: "rohit.gupta@gmail.com",
    phone: "+91-32109-87654",
    website: "rohitgupta.in",
    company: {
      name: "Accenture",
      catchPhrase: "Let there be change",
      bs: "Consulting and technology services"
    },
    address: {
      street: "MG Road",
      suite: "Tower 3, Unit 7",
      city: "Pune",
      zipcode: "411001",
      state: "Maharashtra"
    }
  },
  {
    id: 8,
    name: "Kavya Nair",
    email: "kavya.nair@outlook.com",
    phone: "+91-21098-76543",
    website: "kavyanair.co.in",
    company: {
      name: "Capgemini",
      catchPhrase: "Get the future you want",
      bs: "Digital transformation and engineering"
    },
    address: {
      street: "Marine Drive",
      suite: "Flat 25",
      city: "Kochi",
      zipcode: "682031",
      state: "Kerala"
    }
  },
  {
    id: 9,
    name: "Arjun Mehta",
    email: "arjun.mehta@hotmail.com",
    phone: "+91-10987-65432",
    website: "arjunmehta.com",
    company: {
      name: "IBM India",
      catchPhrase: "Think",
      bs: "Cloud and cognitive solutions"
    },
    address: {
      street: "Residency Road",
      suite: "House 18",
      city: "Jaipur",
      zipcode: "302001",
      state: "Rajasthan"
    }
  },
  {
    id: 10,
    name: "Divya Joshi",
    email: "divya.joshi@gmail.com",
    phone: "+91-98765-43210",
    website: "divyajoshi.in",
    company: {
      name: "Microsoft India",
      catchPhrase: "Empowering every person and organization",
      bs: "Cloud and productivity solutions"
    },
    address: {
      street: "Sector 17",
      suite: "Apartment 9",
      city: "Chandigarh",
      zipcode: "160017",
      state: "Punjab"
    }
  }
]

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    // Simulate API call with Indian user data
    const fetchUsers = async () => {
      try {
        setLoading(true)
        setError(null)
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        setUsers(indianUsers)
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