class UsersController < ApplicationController
    def index
        users = User.order("created_at DESC")
        render json: users
    end

    def create
        user = User.create(user_params)
        render json: user
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def update
        user = User.find(params[:id])
        user.update(user_param)
        render json: user
    end

    private
        def user_params
            params.require(:user).permit(:first_name, :last_name, :password, :email)
        end
end
