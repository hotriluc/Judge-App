class User < ApplicationRecord
  has_secure_password

  # Owners
  # user.courses - display courses that he owned
  has_many :courses, dependent: :destroy, foreign_key: 'owner_id'

  # Enrollments
  # user.enrolled_courses - display courses that he enrolled
  # if there was :courses instead :enrolled_courses that would lead to the conflict
  # and we could not access owner because of the association above
  has_many :enrollments
  has_many :enrolled_courses, through: :enrollments, source: :course

  validates :first_name, presence: { message: 'First name field is empty' }
  validates :last_name, presence: { message: 'Last name field is empty' }
  validates :email, uniqueness: { message: 'This email is already registered' }, email: true
end
