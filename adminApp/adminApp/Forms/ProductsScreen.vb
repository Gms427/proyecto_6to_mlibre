Public Class ProductsScreen
    Private publicationController As PublicationController = New PublicationController()

    Private Sub btnCloseApp_Click(sender As Object, e As EventArgs) Handles btnCloseApp.Click

        CloseAppScreen.ShowDialog()

    End Sub

    Private Sub btnPrevious_Click(sender As Object, e As EventArgs) Handles btnPrevious.Click

        Me.Hide()

    End Sub

    Private Sub btnDelete_Click(sender As Object, e As EventArgs) Handles btnDelete.Click

        lblAction.Text = "¿Realmente quiere eliminar la publicación?"
        viewAlert.Show()

    End Sub

    Private Sub btnDisregard_Click(sender As Object, e As EventArgs) Handles btnDisregard.Click

        lblAction.Text = "¿Realmente quiere validar la publicación?"
        viewAlert.Show()

    End Sub

    Private Sub btnLayOff_Click(sender As Object, e As EventArgs) Handles btnLayOff.Click

        lblAction.Text = "¿Realmente quiere suspender la publicación?"
        viewAlert.Show()

    End Sub

    Private Sub btnCloseAlert_Click(sender As Object, e As EventArgs) Handles btnCloseAlert.Click

        viewAlert.Hide()

    End Sub

    Private Sub btnCancelAction_Click(sender As Object, e As EventArgs) Handles btnCancelAction.Click

        viewAlert.Hide()

    End Sub

    Private Sub btnAcceptAction_Click(sender As Object, e As EventArgs) Handles btnAcceptAction.Click

        viewAlert.Hide()

        publicationController.GetPublication()

    End Sub

End Class