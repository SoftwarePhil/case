defmodule ApiCaseWeb.SurveyController do
  use ApiCaseWeb,  :controller
  alias ApiCase.Survey, as: Survey

  def add(conn, %{"results"=>results}) do
    res = Survey.save_results(results)

    case res do
      {:ok, msg} ->
        conn
        |>json(%{ok: msg})
      {:error, msg}->
        conn
        |>json(%{error: msg})
      _ ->
        conn
        |>json(%{error: "unkown error!"})
    end

  end

  def get_results(conn, _params) do
    json(conn, %{ok: "OK"})
  end
end
