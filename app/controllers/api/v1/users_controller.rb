class Api::V1::UsersController < Api::V1::BaseController

  def index
    @users = User.all
  end

  def create
    @user = User.create(user_params)
    if @user.save!
      respond_with json: @user, status: :ok
    else
      respond_with json: @user.errors, status: :unprocessable_entity
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