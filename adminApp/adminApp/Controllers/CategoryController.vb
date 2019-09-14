Public Class CategoryController
    Private categoryDAL As CategoryDAL = New CategoryDAL()

    Public Function GetCategories()

        Dim categories As List(Of Category) = categoryDAL.GetCategoriesAndSubcategories()

        Return categories
    End Function

    Public Function AddCategory(name As String)
        Dim category = New Category(-1, name)
        Dim res = categoryDAL.AddCategory(category)
        Return res
    End Function

End Class
