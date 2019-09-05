Public Class CategoriesScreen
    Private categoryController As CategoryController = New CategoryController()

    Private Sub btnCloseApp_Click(sender As Object, e As EventArgs) Handles btnCloseApp.Click

        CloseAppScreen.ShowDialog()

    End Sub

    Private Sub btnPrevious_Click(sender As Object, e As EventArgs) Handles btnPrevious.Click

        Me.Hide()

    End Sub

    Private Sub btnAddCategory_Click(sender As Object, e As EventArgs) Handles btnAddCategory.Click

        viewAddCategory.Show()
        categoryController.GetCategories()
    End Sub

    Private Sub btnCloseAddCategory_Click(sender As Object, e As EventArgs) Handles btnCloseAddCategory.Click

        viewAddCategory.Hide()

    End Sub

    Private Sub btnAcceptCategory_Click(sender As Object, e As EventArgs) Handles btnAcceptCategory.Click

        Dim categoryName As String
        categoryName = tbxNameCategory.Text

        If tvCategories.SelectedNode Is Nothing Then

            tvCategories.Nodes.Add(categoryName, categoryName)
        Else

            tvCategories.SelectedNode.Nodes.Add(categoryName, categoryName)
        End If

        categoryController.AddCategory(tvCategories.SelectedNode.Text)

        tbxNameCategory.Text = ""

        viewAddCategory.Hide()

    End Sub

    Private Sub CategoriesScreen_Load(sender As Object, e As EventArgs) Handles MyBase.Load

        Dim categories = categoryController.GetCategories()

        For Each cat As Category In categories
            tvCategories.Nodes.Add(cat.Id, cat.Name)
        Next



        tvCategories.ExpandAll()

    End Sub

    Private Sub btnRemoveCategory_Click(sender As Object, e As EventArgs) Handles btnRemoveCategory.Click

        viewRemoveCategory.Show()

    End Sub

    Private Sub btnCloseRemoveCategory_Click(sender As Object, e As EventArgs) Handles btnCloseRemoveCategory.Click

        viewRemoveCategory.Hide()

    End Sub

    Private Sub btnCancelRemoveCategory_Click(sender As Object, e As EventArgs) Handles btnCancelRemoveCategory.Click

        viewRemoveCategory.Hide()

    End Sub

    Private Sub btnAceptRemoveCategory_Click(sender As Object, e As EventArgs) Handles btnAceptRemoveCategory.Click

        tvCategories.SelectedNode.Remove()
        viewRemoveCategory.Hide()

    End Sub

    Private Sub tvCategories_NodeMouseHover(sender As Object, e As TreeNodeMouseHoverEventArgs) Handles tvCategories.NodeMouseHover

    End Sub
End Class