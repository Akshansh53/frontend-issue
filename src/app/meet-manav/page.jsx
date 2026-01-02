const mongoose = require('mongoose');

const demoBookingSchema = new mongoose.Schema({
  parentName: { type: String, required: true },
  childName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  countryCode: { type: String, },

  grade: { type: String, required: true },
   demoLink: {
    date: { type: Date, default: null },
    time: { type: String, default: null },
    joinUrl: { type: String, default: null },
    startUrl: { type: String, default: null },
    startTimeUTC: { type: String, default: null },
    endTimeUTC: { type: String, default: null },
    teacherDetails: {
      name: { type: String, default: null },
      email: { type: String, default: null },
    },
  },
  status: { type: String, enum: ['pending', 'accepted', 'completed', 'notConducted'], default: 'pending' },
  rescheduleCount: { type: Number, default: 0 },
  timezone: { type: String, default: 'UTC' },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  salesUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
 feedback: {
   childName: { type: String },
   parentName: { type: String },
   kidsConfidence: { type: String },
   financialCondition: { type: String },
   remarks: { type: String },        // ✅ NEW
   submitted: { type: Boolean, default: false }, // ✅ NEW - REQUIRED for completion
   submittedAt: { type: Date },      // ✅ NEW - Track when feedback was submitted
   submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // ✅ NEW - Who submitted
   createdAt: { type: Date, default: Date.now },
 },
 

  leadSource: { 
  type: String, 
  enum: ['mainWebsite', 'demoWebsite', 'ads', 'referral', 'partner', 'youtube', 'other'], 
  default: 'mainWebsite'
},
history: [{
    action: { type: String }, // e.g., 'assigned', 'rescheduled'
    performedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    details: String,
    timestamp: { type: Date, default: Date.now }
  }],
  interested: { type: Boolean, default: null },
  earnings: [{
    amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
  }],
}, { timestamps: true });

module.exports = mongoose.model('DemoBooking', demoBookingSchema);