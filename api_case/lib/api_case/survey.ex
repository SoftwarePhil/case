defmodule ApiCase.Survey do
    alias ApiCase.Couch.Db, as: Couch

    ##creates couchdb database
    def init_db() do
        Couch.init_db("case_app")
    end

    def save_results(%{"user"=>user, "results"=>results}) do
        ##write to couch db

        ##return ok
    end

    def return_results() do
        ##get results from couch db

        ##returns a list containing all survey results
        
    end

end