# == Schema Information
#
# Table name: todos
#
#  id    :bigint           not null, primary key
#  title :string           not null
#  body  :string           not null
#  done  :boolean          not null
#
class Todo < ApplicationRecord
    validates :title, :body, presence: true
    validates :done, inclusion: { in: [true, false] }  
    
end
