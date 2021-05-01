require 'json'
require 'haml'
require './src/constants'
require "./src/utils/render"

def json_read(path, **kwargs)
    raw = File.read path
    JSON.parse raw, **kwargs
end

def render_film(film)
    film_data = json_read "#{DATA_FILMS_DIR}#{film}.json", symbolize_names: true

    html = render :film, film_data
    File.write "#{FILMS_DIR}#{film}.html", html

    film_data
end

def main()
    films = json_read "#{DATA_DIR}/films.json"

    films.each do |film|
        render_film film
    end
end

main()