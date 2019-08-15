Public Class CategoryController
    Private categoryDAL As CategoryDAL = New CategoryDAL()

    Public Sub GetCategories()

        Dim categories As List(Of Category) = categoryDAL.GetCategories()

    End Sub

End Class
