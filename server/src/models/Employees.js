import mongoose from 'mongoose';


const employeeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
  },
  nameWithInitial: {
    type: String,
    required: [true, "name with initials is required"]
  },
  displayName: {
    type: String,
    required: [true, "display name is required"]
  },
  gender: {
    type: String,
    
  },
  DateOfBirth: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: [true, "Email is required"],
		trim: true,
		lowercase: true,
		unique: [true, "Email already exists"],
    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Invalid email format"
    }
  
  },
  mobileNumber: {
    type: String,
    required: [true, "User phone number required"]
  },
  designation: {
    type: String,
    required: true
  },
  employeeType: {
    type: String,
    required: [true, "employee type is required"]
  },
  joinedDate: {
    type: String,
    
  },
  Experience: {
    type: String,
    required: [true, "experience is required"]
  },
  salary: {
    type: Number,
    required: [true, "Salary is required"]
  },
  note:{
    type: String
  }
});

export const Employee = mongoose.model('Employee', employeeSchema);


