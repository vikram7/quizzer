class Api::V1::StructuresController < ApplicationController
  def index
    @structures = Structure.all

    render json: @structures
  end

  def show
    @structure = Structure.find(params[:id])

    render json: @structure
  end
end
