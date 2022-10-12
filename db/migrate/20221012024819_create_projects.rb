class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :project_name
      t.text :project_description
      t.string :project_url
      t.string :project_code

      t.timestamps
    end
  end
end
