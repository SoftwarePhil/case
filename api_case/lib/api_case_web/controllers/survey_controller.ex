defmodule ApiCaseWeb.SurveyController do
  use ApiCaseWeb, :controller

  def save_result(conn, %{"user"=>user, }) do
    
    json(conn, %{ok: "OK"})
  end

  def get_results(conn, _params) do
    json(conn, %{ok: "OK"})
  end
end
