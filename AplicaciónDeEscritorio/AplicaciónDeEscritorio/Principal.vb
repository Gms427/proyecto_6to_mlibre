Public Class Principal
    Private Sub btnLogin_Click(sender As Object, e As EventArgs)
        login.ShowDialog()
    End Sub

    Private Sub btnRegistrarme_Click(sender As Object, e As EventArgs)
        Registro.ShowDialog()
    End Sub

    Private Sub btnCerrar_Click(sender As Object, e As EventArgs) Handles btnCerrar.Click
        ActiveForm.Close()
    End Sub

End Class