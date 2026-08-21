const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const User = require('./models/User');

const seedSuperAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');

    // Remove old superadmin if exists with this email or ID
    await User.deleteMany({ $or: [{ email: 'admin@examin.com' }, { studentId: '27900123027' }] });

    // Create superadmin user (mongoose pre('save') hook will hash the password once)
    const superAdmin = await User.create({
      name: 'Super Admin',
      email: 'admin@examin.com',
      password: '06102005',
      role: 'superadmin',
      studentId: '27900123027',
      isApproved: true,
      isActive: true,
      institution: 'Main System'
    });

    console.log('✅ SuperAdmin created successfully in database:');
    console.log('   Email:     ', superAdmin.email);
    console.log('   Admin ID:  ', superAdmin.studentId);
    console.log('   Password:   06102005');
    console.log('   Role:      ', superAdmin.role);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding SuperAdmin:', error);
    process.exit(1);
  }
};

seedSuperAdmin();
