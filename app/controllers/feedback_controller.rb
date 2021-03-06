class FeedbackController < ApplicationController
  protect_from_forgery except: :create

  def create 
    feedback = Feedback.new(feedback_params)
    if feedback.save
      render json: feedback, status: :ok
    else
      render json: feedback.errors, status: :unprocessable_entity
    end
  end

  private

  def feedback_params
    params.require(:feedback).permit(:name, :surname, :name_channel, :email)
  end
end
