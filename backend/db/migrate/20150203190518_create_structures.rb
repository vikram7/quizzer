class CreateStructures < ActiveRecord::Migration
  def change
    create_table :structures do |t|
      t.text :description, null: false

      t.timestamps null: false
    end

    add_index :structures, :description, unique: true
  end
end
