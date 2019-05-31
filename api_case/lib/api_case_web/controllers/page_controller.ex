defmodule ApiCaseWeb.PageController do
  use ApiCaseWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
