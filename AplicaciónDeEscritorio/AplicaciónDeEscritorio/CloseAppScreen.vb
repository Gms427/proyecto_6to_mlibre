Public Class CloseAppScreen
    Private Sub btnAceptar_Click(sender As Object, e As EventArgs) Handles btnAceptar.Click
        Application.Exit()

    End Sub

    Private Sub btnCancelar_Click(sender As Object, e As EventArgs) Handles btnCancelar.Click
        ProductsSmallScreen.Show()
        ActiveForm.Close()
    End Sub
End Class