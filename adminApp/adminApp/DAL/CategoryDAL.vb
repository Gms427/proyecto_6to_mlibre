Imports Npgsql
Imports Newtonsoft.Json
Imports System.Configuration

Public Class CategoryDAL
    Private connectionClass As ConnectionPgSQL = New ConnectionPgSQL()
    Private connection As NpgsqlConnection = connectionClass.openConnection()
    Private serverUrl As String = ConfigurationManager.AppSettings("ServerUrl")


    Public Function GetCategories() As List(Of Category)
        ' Consulta a la base, crear la lista de Category y retornarla
        Dim config = ConfigurationManager.AppSettings("ServerUrl")

        Dim queryString = "SELECT * FROM category WHERE id_category <> 0 ORDER BY name"

        Dim cmd = New NpgsqlCommand(queryString, connection)

        Dim reader As NpgsqlDataReader
        reader = cmd.ExecuteReader()

        Dim categoryList As List(Of Category) = New List(Of Category)

        If reader.HasRows Then
            While (reader.Read())

                Dim id = reader("id_category")
                Dim name = reader("name")

                Dim category As Category = New Category(id, name)

                categoryList.add(category)

            End While
        End If

        reader.Close()

        Return categoryList

    End Function

    Public Function AddCategory(Category As Category)
        Dim serializedCategory = JsonConvert.SerializeObject(Category)
        'Dim res = Http.HttpPost(serverUrl + "/test", serializedCategory)
        'Return res
    End Function

    Public Function GetCategoriesAndSubcategories() As List(Of Category)
        Dim res = Http.HttpGet(serverUrl + "/getCategories")
        Return JsonConvert.DeserializeObject(Of List(Of Category))(res)
    End Function

End Class
