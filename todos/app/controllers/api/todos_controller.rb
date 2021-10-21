class Api::TodosController < ApplicationCpntroller

def show
  render json: Todo.find(params[:id])
end

def index
    @todos = Todo.all
    render json: @todo
end

def create
  @todo = Todo.new(todo_params)
  if @todo.save
    render json: @todo
  else
    render json: @todo.errors.full_messages, status: 422
  end
end

private
    def todo_params
        params.require(:todo).permit(:title, :body)
    end
end