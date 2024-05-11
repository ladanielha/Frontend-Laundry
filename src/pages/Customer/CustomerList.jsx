import React from "react";

const CustomerList = () => {
    const daftarCustomer = [
    {
        _id:1,
        code: "001",
        name: "John Doe",
        phonenumber: "123-456-7890",
        address: "123 Main Street",
    },
    {
        _id:2,
        code: "002",
        name: "Jane Smith",
        phonenumber: "456-789-0123",
        address: "456 Elm Street",
    },
    {
        _id:3,
        code: "003",
        name: "Alice Johnson",
        phonenumber: "789-012-3456",
        address: "789 Oak Avenue",
    },
    {
        _id:4,
        code: "004",
        name: "Bob Brown",
        phonenumber: "321-654-9870",
        address: "321 Pine Road",
    },
    {
        _id:5,
        code: "005",
        name: "Emily Davis",
        phonenumber: "654-987-0123",
        address: "654 Cedar Lane",
    },
  ];

  return (
    <div>
      CustomerList
      <table >
        <thead>
          <tr>
            <th>Nomor</th>
            <th>Nama</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {daftarCustomer.map((customer) => (
            <tr key={customer._id}>
              <td>{customer.code}</td>
              <td>{customer.name}</td>
              <td>{customer.phonenumber}</td>
              <td>{customer.address}</td>
              <td>
                <button size="sm">Edit</button> | 
                <button size="sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CustomerList;
