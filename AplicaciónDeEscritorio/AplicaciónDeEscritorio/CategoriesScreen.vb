﻿Public Class CategoriesScreen

    Private Sub btnCloseApp_Click(sender As Object, e As EventArgs) Handles btnCloseApp.Click

        CloseAppScreen.ShowDialog()

    End Sub

    Private Sub btnPrevious_Click(sender As Object, e As EventArgs) Handles btnPrevious.Click

        Me.Hide()

    End Sub

    Private Sub btnAddCategory_Click(sender As Object, e As EventArgs) Handles btnAddCategory.Click

        viewAddCategory.Show()

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

    End Sub

    Private Sub CategoriesScreen_Load(sender As Object, e As EventArgs) Handles MyBase.Load

        tvCategories.ExpandAll()
        tvCategories.Nodes.Add("Add")


    End Sub

    Private Sub tvCategories_DoubleClick(sender As Object, e As EventArgs) Handles tvCategories.DoubleClick

        If tvCategories.SelectedNode.Text = "Add" Then

            tvCategories.Nodes.Add("Hola soy nuevo")

        End If

    End Sub

End Class