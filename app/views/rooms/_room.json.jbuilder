json.extract! room, :id, :name, :description, :slug, :url, :created_at, :updated_at
json.url room_url(room, format: :json)
