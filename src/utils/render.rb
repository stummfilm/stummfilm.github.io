require './src/constants'

def render(name, data={})
    template_content = File.read "#{TEMPLATES_DIR}#{name}.haml"

    engine = Haml::Engine.new template_content
    engine.render Object.new, :data => data
end

def render_component(name, data={})
    render "components/#{name}", data
end