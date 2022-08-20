class CoursesController < ApplicationController
  before_action :set_course, only: %i[show update]

  # GET /courses
  def index
    @courses = current_user.courses
    render json: @courses
  end

  # GET /courses/:id
  def show
    render json: @course
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

  private

  def course_params
    params.require(:course).permit(:title, :description)
  end

  def set_course
    @course = Course.find_by(id: params['id'])
    render json: { error: 'No such course exists' }, status: 400 if @course.nil?
  end
end
