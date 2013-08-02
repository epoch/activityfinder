class ActivitiesController < ApplicationController

  def new
  end

  def create
    @activity = Activity.create(params[:activity])
    current_user.activities << @activity
    @activity.memberships.first.role = 'owner'
    @activity.save
  end

end