module Api
  module V1
    class UsersController < Api::V1::BaseController

      def index
        @users = User.all
      end

      def create
        @user = User.create(user_params)
        if @user.save!
          render :index, status: :ok
        else
          respond_with @user.errors, status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.require(:user).permit(:first_name,
                                     :last_name,
                                     :email,
                                     :roles,
                                     :student_number,
                                     :password,
                                     :password_confirmation)
      end
    end
  end
end
