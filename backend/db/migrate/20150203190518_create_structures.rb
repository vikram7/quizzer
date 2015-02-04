class CreateStructures < ActiveRecord::Migration
  def change
    create_table :structures do |t|
      t.text :description, null: false
      t.text :findable, null: false

      t.timestamps null: false
    end

    add_index :structures, :description, unique: true
    add_index :structures, :findable, unique: true
  end
end
