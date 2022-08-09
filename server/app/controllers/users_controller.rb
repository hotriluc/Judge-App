class UsersController < ApplicationController
  before_action :set_user, only: [:show, :destroy]
  skip_before_action :authorized, only: [:create]

  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  # GET /users/:id
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      token = issue_token(@user)
      render json: { user: @user.as_json, token: token }, status: 200
    else
      render json: { error: 'User could not be created. Please, try again later.' }, status: 400
    end
  end

  # DELETE /users/:id
  def destroy
    User.destroy(@user.id)
    render json: { message: 'success' }
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :email)
  end

  def set_user
    @user = User.find_by(id: params['id'])
    if @user.nil?
      render json: { error: 'No such user exists' }, status: 400
    end
  end

end
