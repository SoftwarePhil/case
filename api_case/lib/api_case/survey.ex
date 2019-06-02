defmodule ApiCase.Survey do
    alias ApiCase.Couch.Db, as: Couch
    @db_name "case_app"
    @db %{database: "case_app", hostname: "localhost", port: 5984, protocol: "http"}

    ##creates couchdb database
    def init_db() do
        Couch.init_db(@db_name)
    end

    def save_results(results) do
        time = :os.system_time(:seconds)
        add = %{"time"=>time, "type"=>"survey", "results"=>results}

        ##write to couch db
        Couch.write_document(@db, "survey~#{time}~#{Couch.create_id()}", add, :map)
    end

    def return_results() do
        ##get results from couch db

        ##returns a list containing all survey results

    end

end
