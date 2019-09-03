Public Class CategoryController
    Private categoryDAL As CategoryDAL = New CategoryDAL()

    Public Function GetCategories()

        Dim categories As List(Of Category) = categoryDAL.GetCategories()

        Return categories
    End Function

    Public Function AddCategory(name As String)
        categoryDAL.AddCategory(name)
    End Function

End Class
