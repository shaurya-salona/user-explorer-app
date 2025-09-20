function UserCard({ user }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {user.name}
        </h3>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Email:</span> {user.email}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Phone:</span> {user.phone}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Website:</span> 
          <a 
            href={`https://${user.website}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 ml-1"
          >
            {user.website}
          </a>
        </p>
      </div>
      
      <div className="border-t pt-4">
        <h4 className="font-medium text-gray-800 mb-2">Company</h4>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Name:</span> {user.company.name}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Catchphrase:</span> {user.company.catchPhrase}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Business:</span> {user.company.bs}
        </p>
      </div>
      
      <div className="border-t pt-4 mt-4">
        <h4 className="font-medium text-gray-800 mb-2">Address</h4>
        <p className="text-gray-600 text-sm">
          {user.address.street}, {user.address.suite}<br />
          {user.address.city}, {user.address.zipcode}<br />
          <span className="text-blue-600 font-medium">{user.address.state}</span>
        </p>
      </div>
    </div>
  )
}

export default UserCard
