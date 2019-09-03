Public Class CloseAppScreen

    Private Sub btnAceptar_Click(sender As Object, e As EventArgs) Handles btnAccept.Click

        Application.Exit()

    End Sub

    Private Sub btnCancelar_Click(sender As Object, e As EventArgs) Handles btnCancel.Click

        Me.Hide()

    End Sub

End Class