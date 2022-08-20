class Course < ApplicationRecord
  belongs_to :owner, class_name: 'User', foreign_key: 'owner_id'

  # Enrollments
  has_many :enrollments
  has_many :users, through: :enrollments
end
