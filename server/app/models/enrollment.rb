class Enrollment < ApplicationRecord
  belongs_to :user
  belongs_to :course

  # Restrict adding same user to the same course
  validates_uniqueness_of :course_id, scope: :user_id
end
