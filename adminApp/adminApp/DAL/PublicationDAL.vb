Imports Npgsql
Imports System.Configuration

Public Class PublicationDAL
    Private connectionClass As ConnectionPgSQL = New ConnectionPgSQL()
    Private connection As NpgsqlConnection = connectionClass.openConnection()
    Private serverUrl As String = ConfigurationManager.AppSettings("ServerUrl")

    Public Function GetPublications() As List(Of Publication)
        ' Consulta a la base, crear la lista de Publications y retornarla
        Dim config = ConfigurationManager.AppSettings("ServerUrl")

        Dim queryString = "select 	pr.id_product,
		                    pr.name,
		                    pr.description,
		                    pr.price,
		                    pr.currency,
		                    count(prp.id_product) as reports from product pr
                            inner join publication_report prp
	                        on pr.id_product = prp.id_product
                            group by pr.id_product;"

        Dim cmd = New NpgsqlCommand(queryString, connection)

        Dim reader As NpgsqlDataReader
        reader = cmd.ExecuteReader()

        Dim publicationsList As List(Of Publication) = New List(Of Publication)

        If reader.HasRows Then
            While (reader.Read())

                Dim id = reader("id_product")
                Dim name = reader("name")
                Dim description = reader("description")
                Dim price = reader("price")
                Dim currency = reader("currency")
                Dim reports = reader("reports")

                Dim publication As Publication = New Publication(id, name, description, price, currency, reports, "")

                publicationsList.Add(publication)

            End While
        End If

        reader.Close()

        Return publicationsList

    End Function

    Public Function GetReports() As List(Of Report)
        ' Consulta a la base, crear la lista de Reports y retornarla
        Dim config = ConfigurationManager.AppSettings("ServerUrl")

        Dim queryString = "select *
                           from publication_report where id_product = 3"

        Dim cmd = New NpgsqlCommand(queryString, connection)

        Dim reader As NpgsqlDataReader
        reader = cmd.ExecuteReader()

        Dim reportsList As List(Of Report) = New List(Of Report)

        If reader.HasRows Then
            While (reader.Read())

                Dim idProduct = reader("id_product")
                Dim idUser = reader("id_user")
                Dim description = reader("description")

                Dim reports As Report = New Report(idProduct, idUser, description)

                reportsList.Add(reports)

            End While
        End If

        reader.Close()

        Return reportsList

    End Function

End Class
