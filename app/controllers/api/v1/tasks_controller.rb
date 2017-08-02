module Api
  module V1
    class TasksController < Api::V1::BaseController
      def index
        puts current_user
        @tasks = UserTask.all
      end
    end
  end
end