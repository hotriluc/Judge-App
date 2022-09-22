class CoursesController < ApplicationController
  before_action :set_course, only: %i[show update destroy remove_student]
  before_action :owner?, only: %i[show update destroy]

  # GET /courses
  def index
    @courses = current_user.courses
    render json: @courses
  end

  # GET /courses/:id
  def show
    render json: { course: @course, students: @course.users }
  end

  # POST /courses
  def create
    @course = Course.new(course_params)

    if @course.save
      render json: @course, status: 200
    else
      render json: { error: 'Course could not be created. Please, try again later.' }, status: 400
    end
  end

  # PATCH /course/:id
  def update
    @course.update(course_params)
    render json: @course
  end

  # DELETE /course/:id
  def destroy
    Course.destroy(@course.id)
    render json: { message: 'success' }
  end

  def remove_student
    @course.users.delete(params['student_id'])
    render json: { message: 'student removed successfully' }
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'No such student exists' }
  end

  private

  def course_params
    params.require(:course).permit(:title, :description)
  end

  def set_course
    @course = Course.find_by(id: params['id'])
    render json: { error: 'No such course exists' }, status: 400 if @course.nil?
  end

  def owner?
    unless @course.owner_id == current_user.id
      render json: { error: 'You don\'t have permission to this course' },
             status: 401
    end
  end
end
