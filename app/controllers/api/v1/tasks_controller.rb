module Api
  module V1
    class TasksController < Api::V1::BaseController
      def index
        @tasks = Task.all
      end
    end
  end
end